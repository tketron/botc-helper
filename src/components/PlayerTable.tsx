import { Table } from '@chakra-ui/react';
import { useState } from 'react';

const COUNTS = [
  { total: 5, townsfolk: 3, outsiders: 0, minions: 1, demons: 1 },
  { total: 6, townsfolk: 3, outsiders: 1, minions: 1, demons: 1 },
  { total: 7, townsfolk: 5, outsiders: 0, minions: 1, demons: 1 },
  { total: 8, townsfolk: 5, outsiders: 1, minions: 1, demons: 1 },
  { total: 9, townsfolk: 5, outsiders: 2, minions: 1, demons: 1 },
  { total: 10, townsfolk: 7, outsiders: 0, minions: 2, demons: 1 },
  { total: 11, townsfolk: 7, outsiders: 1, minions: 2, demons: 1 },
  { total: 12, townsfolk: 7, outsiders: 2, minions: 2, demons: 1 },
  { total: 13, townsfolk: 9, outsiders: 0, minions: 3, demons: 1 },
  { total: 14, townsfolk: 9, outsiders: 1, minions: 3, demons: 1 },
  { total: 15, townsfolk: 9, outsiders: 2, minions: 3, demons: 1 },
];

const HIGHLIGHT_COLOR = 'red';

function PlayerTable() {
  const [playerCount, setPlayerCount] = useState('');

  function onTableClick(e) {
    setPlayerCount(e.target.dataset.column);
  }

  return (
    <Table.Root onClick={(e) => onTableClick(e)}>
      <Table.Header
        borderBottomWidth="3px"
        borderColor="white"
      >
        <Table.Row>
          <Table.ColumnHeader>Players</Table.ColumnHeader>
          {COUNTS.map((count) => {
            return (
              <Table.ColumnHeader
                key={count.total}
                data-column={count.total}
                bgColor={
                  +playerCount === count.total ? HIGHLIGHT_COLOR : 'inherit'
                }
              >
                {count.total}
              </Table.ColumnHeader>
            );
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Townsfolk</Table.Cell>
          {COUNTS.map((count) => (
            <Table.Cell
              key={count.total}
              data-column={count.total}
              bgColor={
                +playerCount === count.total ? HIGHLIGHT_COLOR : 'inherit'
              }
            >
              {count.townsfolk}
            </Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Outsiders</Table.Cell>
          {COUNTS.map((count) => (
            <Table.Cell
              key={count.total}
              data-column={count.total}
              bgColor={
                +playerCount === count.total ? HIGHLIGHT_COLOR : 'inherit'
              }
            >
              {count.outsiders}
            </Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Minions</Table.Cell>
          {COUNTS.map((count) => (
            <Table.Cell
              key={count.total}
              data-column={count.total}
              bgColor={
                +playerCount === count.total ? HIGHLIGHT_COLOR : 'inherit'
              }
            >
              {count.minions}
            </Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Demons</Table.Cell>
          {COUNTS.map((count) => (
            <Table.Cell
              key={count.total}
              data-column={count.total}
              bgColor={
                +playerCount === count.total ? HIGHLIGHT_COLOR : 'inherit'
              }
            >
              {count.demons}
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}

export default PlayerTable;
