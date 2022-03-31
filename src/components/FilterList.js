import styled, { css } from 'styled-components';

export default function FilterList({ phrases, onFilterClick, filterButtons }) {
  const allExistingNames = [...new Set(phrases.map(item => item.name))];
  const categoryTagsAndAll = ['Alle', ...allExistingNames].sort();

  return (
    <>
      <FilterNameList role="list">
        {categoryTagsAndAll.map((item, index) => (
          <li key={index}>
            <StyledButton type="button" active={item === filterButtons} onClick={() => onFilterClick(item)}>
              {item}
            </StyledButton>
          </li>
        ))}
      </FilterNameList>
    </>
  );
}

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 25px;
  min-width: 80px;
  border: 1px solid var(--color-indigo-blue);
  background: transparent;
  color: var(--color-indigo-blue);
  ${props =>
    props.active &&
    css`
      background: var(--color-indigo-blue);
      color: #fff;
    `}

  cursor: pointer;
`;

const FilterNameList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  overflow-y: scroll;
`;
