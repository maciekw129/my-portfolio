import styled from 'styled-components/macro';

const SectionTitle = styled.h2<{align: string}>`
    color: #F1F3F8;
    font-weight: 500;
    //border-bottom: 1px solid #F1F3F8;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    text-align: ${({align}) => align};
    & span {
        color: #F6A401;
    }
`;

export default SectionTitle;