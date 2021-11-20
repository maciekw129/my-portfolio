import styled from 'styled-components/macro';

const SectionTitle = styled.h2<{ width: string }>`
    color: #F1F3F8;
    font-weight: 500;
    border-bottom: 1px solid #F1F3F8;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    width: ${({width}) => width};

    & span {
        color: #F6A401;
    }
`;

export default SectionTitle;