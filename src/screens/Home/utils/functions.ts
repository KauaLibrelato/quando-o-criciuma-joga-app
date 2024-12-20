import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { TabState } from './constants';
import { storageService } from '~/utils/storageService';
import { isSameDay } from 'date-fns';

async function getTeamInfoData(): AxiosPromise<TeamInfoResponse> {
  const infos = await axios.get<TeamInfoResponse>(String(process.env.API_URL));
  const tableData: any = await storageService.getItem('tableData');
  console.log(tableData);

  if (!tableData || !isSameDay(new Date(), new Date(tableData[0]?.update))) {
    storageService.setItem('tableData', JSON.stringify(infos.data?.table));
  }

  return infos;
}

export function useTeamData() {
  const query = useQuery({
    queryKey: ['teamInfo'],
    queryFn: () => getTeamInfoData(),
    staleTime: 1000 * 60 * 5,
  });
  return {
    ...query,
    data: query.data?.data,
  };
}

export const shouldShowOne = (data: TeamInfoResponse | undefined, switchValue: TabState) => {
  const { previousMatches, upcomingMatches } = data || {};
  if (switchValue === TabState.NEXT && upcomingMatches?.length === 1) {
    return true;
  } else if (switchValue === TabState.PREVIOUS && previousMatches?.length === 1) {
    return true;
  }

  return false;
};
