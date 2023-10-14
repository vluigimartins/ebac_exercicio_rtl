import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target: {
                value: 'Teste para adicionar comentário',
            }
        });
        fireEvent.click(screen.getByTestId('post-comment-button'));
    
        fireEvent.change(screen.getByTestId('post-comments-textarea'), {
            target: {
                value: 'Teste para adicionar o segundo comentário ',
            }
        });
        fireEvent.click(screen.getByTestId('post-comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});