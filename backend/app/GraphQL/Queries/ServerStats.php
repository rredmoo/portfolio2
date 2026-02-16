<?php

namespace App\GraphQL\Queries;

class ServerStats
{
    private function getCpuUsagePercent(): float
    {
        $stat1 = explode(" ", preg_replace("/\s+/", " ", trim(file_get_contents("/proc/stat"))));
        sleep(1);
        $stat2 = explode(" ", preg_replace("/\s+/", " ", trim(file_get_contents("/proc/stat"))));

        $total1 = array_sum(array_slice($stat1, 1, 8));
        $total2 = array_sum(array_slice($stat2, 1, 8));

        $idle1 = $stat1[4];
        $idle2 = $stat2[4];

        $totalDiff = $total2 - $total1;
        $idleDiff = $idle2 - $idle1;

        return round((1 - ($idleDiff / $totalDiff)) * 100, 1);
    }

    public function __invoke()
    {
        return [
            "cpuUsage" => $this->getCpuUsagePercent(),
            "memoryUsage" => memory_get_usage(true), // TODO find a better way to do this, this is for bytes used to run specific script
            "currentTime" => now(),
        ];
    }
}
