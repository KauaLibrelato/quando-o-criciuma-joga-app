import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-native-reanimated-table';
import * as S from './TableStyles';
import { tableHeaderProps, tableRowProps } from './utils/constants';
import { getAllRowsTable } from './utils/functions';

export function TableScreen() {
  const [rows, setRows] = useState<string[][]>([]);
  const fetchData = async () => {
    const data = await getAllRowsTable();
    setRows(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <S.Container>
      <S.ChampionshipTitle>Série A</S.ChampionshipTitle>
      <S.TableContainer>
        <S.View>
          <Table style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <Row {...tableHeaderProps} />
          </Table>
          <S.RowsScrollView>
            <Table>
              {rows.map((team, index) => (
                <Row key={index} {...tableRowProps(index, team)} />
              ))}
            </Table>
          </S.RowsScrollView>
        </S.View>
      </S.TableContainer>
    </S.Container>
  );
}
