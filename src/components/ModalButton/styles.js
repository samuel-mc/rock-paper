import styled from 'styled-components';

const Button = styled.button `
    background-color: var(--primary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 1.75rem;
    margin: 16px;
    padding: 12px;
    transition: all 0.8s ease-in-out;

    &:hover {
        background-color: var(--secondary-color);
        transition: all 0.4s ease-in-out;
    }
`;

export default Button;