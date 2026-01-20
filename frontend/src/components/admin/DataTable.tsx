import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TableWrapper = styled.div`
  margin: 1rem 0 1rem;
  width: 100%;
  overflow: auto;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-bg-secondary);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  font-family: var(--font-main);
  color: var(--color-text);
  font-size: 14px;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-secondary);
`;

const Tr = styled.tr`
  //
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 14px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: color-mix(in oklch, var(--color-text) 75%, transparent);
  border-bottom: 1px solid var(--color-border);
  background: linear-gradient(
    180deg,
    color-mix(
        in oklch,
        var(--color-bg-secondary) 90%,
        var(--color-primary-purple)
      )
      0%,
    var(--color-bg-secondary) 100%
  );

  &:first-child {
    border-top-left-radius: 14px;
  }
  &:last-child {
    border-top-right-radius: 14px;
  }
`;

const Tbody = styled.tbody`
  //
`;

const Td = styled.td`
  padding: 12px 14px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  white-space: nowrap;
`;

const Row = styled.tr`
  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &:nth-child(even) td {
    background: color-mix(
      in oklch,
      var(--color-bg-secondary) 90%,
      var(--color-bg)
    );
  }
  &:hover td {
    background: color-mix(
      in oklch,
      var(--color-hover-light-purple) 16%,
      var(--color-bg-secondary)
    );
  }
  &:last-child td {
    border-bottom: none;
  }
`;

type WithId = { id: number };

interface DataTableProps<T extends WithId> {
  data: T[];
  editPath: (row: T) => string;
  onDelete: (id: number) => void;
}

export default function DataTable<T extends WithId>({
  data,
  editPath,
  onDelete,
}: DataTableProps<T>) {
  if (data.length === 0) return null;
  
  const navigate = useNavigate();
  const keys = Object.keys(data[0]) as (keyof T)[];
  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            {keys.map((key) => (
              <Th key={String(key)}>{String(key)}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {data.map((row, i) => (
            <Row key={i}>
              {keys.map((key) => (
                <Td key={String(key)}>{String(row[key])}</Td>
              ))}

              <Td>
                <button onClick={() => navigate(editPath(row))}>Edit</button>
                <button onClick={() => onDelete(row.id)}>Delete</button>
              </Td>
            </Row>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
}
