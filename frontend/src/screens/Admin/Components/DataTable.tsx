import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TableWrapper = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-bg-secondary);
`;

const Table = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--color-text);
  font-size: 14px;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Th = styled.th`
  text-align: left;
  padding: 14px 16px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border);
  background: color-mix(
    in oklch,
    var(--color-bg-secondary) 92%,
    var(--color-primary-purple)
  );
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: 16px;
  }
  &:last-child {
    border-top-right-radius: 16px;
  }
`;

const Td = styled.td`
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-border);
`;

const Row = styled.tr`
  transition: background 0.3s ease;

  &:hover td {
    background: var(--color-bg) 90%
  }

  &:last-child td {
    border-bottom: none;
  }
`;

const ActionsCell = styled(Td)`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const ActionBtn = styled.button<{ variant?: "edit" | "delete" }>`
  border: none;
  padding: 7px 12px;
  margin: 5px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  background: ${(p) =>
    p.variant === "delete"
      ? "color-mix(in oklch, red 70%, var(--color-bg-secondary))"
      : "color-mix(in oklch, var(--color-primary-purple) 70%, var(--color-bg-secondary))"};

  color: white;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0px);
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
  const keys = Object.keys(data[0]).filter(
    (key) => key !== "__typename", // this removes apollo auto added __typename used for caching
  ) as (keyof T)[];

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            {keys.map((key) => (
              <Th key={String(key)}>{String(key)}</Th>
            ))}
            <Th>Actions</Th>
          </tr>
        </Thead>

        <tbody>
          {data.map((row) => (
            <Row key={row.id}>
              {keys.map((key) => (
                <Td key={String(key)}>{String(row[key])}</Td>
              ))}

              <ActionsCell>
                <ActionBtn
                  variant="edit"
                  onClick={() => navigate(editPath(row))}
                >
                  Edit
                </ActionBtn>

                <ActionBtn
                  variant="delete"
                  onClick={() => onDelete(row.id)}
                >
                  Delete
                </ActionBtn>
              </ActionsCell>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
