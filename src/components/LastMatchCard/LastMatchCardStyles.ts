import styled from 'styled-components/native';

export const Container = styled.View<{ one: boolean; horizontal: boolean }>`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: ${({ one, horizontal }) => (one || !horizontal ? 0 : 16)}px;
  margin-bottom: 16px;
`;

export const LeftContainer = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
`;

export const CenterContainer = styled.View``;

export const DayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ResultContainer = styled.View``;

export const ResultText = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Championship = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const RightContainer = styled.View``;
