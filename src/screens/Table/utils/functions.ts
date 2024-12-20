import theme from '~/theme/theme';
import { storageService } from '~/utils/storageService';

export function calculateWinningPercentage(pointsEarned: number, totalPoints: number): number {
  const winningPercentage = (pointsEarned / totalPoints) * 100;
  return winningPercentage;
}

function getRowsTableData(item: TableData) {
  return [
    `${item?.team?.name.split('-')[0]}`,
    `${item?.points}`,
    `${item?.all?.played}`,
    `${item?.all?.win}`,
    `${item?.all?.draw}`,
    `${item?.all?.lose}`,
    `${item?.all?.goals?.for}`,
    `${item?.all?.goals?.against}`,
    `${item?.goalsDiff}`,
    `${Math.round(calculateWinningPercentage(item?.points, item?.all?.played * 3))}`,
  ];
}

export function getBackgroundColorByRank(rank: number) {
  if (rank <= 3) {
    return theme.colors.lowBlue;
  } else if (rank >= 16) {
    return theme.colors.lowRed;
  }
  return theme.colors.tableRow;
}

export async function getAllRowsTable() {
  const table: string | null = await storageService.getItem('tableData');
  return JSON.parse(table as string)?.map((item: TableData) => {
    return getRowsTableData(item);
  });
}

export function getBorderByRank(rank: number) {
  if (rank === 19) {
    return 8;
  }
  return 0;
}
