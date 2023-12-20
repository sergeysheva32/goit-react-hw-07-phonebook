import styled from 'styled-components';

export const PhonebookSection = styled.section`
  display: flex;
  justify-content: center;

`;

export const PhonebookContainer = styled.div`
  min-width: 500px;

  padding-top: 20px;

`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: 0 20px 20px;

  border-bottom: 3px solid ${({ theme }) => theme.colors.accentPrimary};
`;

export const Title = styled.h2``;
