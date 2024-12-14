import {describe, it, test, expect} from 'vitest';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('App', () => {
    it('should render App correctly', async ({expect}) => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });


    describe('Edit Button is Clicked', async () => {
        it('should render Save button', async ({expect}) => {
            const { container } = render(<App />);
            const editButton = screen.getAllByRole('button', { name: `Edit` });
            await userEvent.click(editButton[0]);
            const saveButton = screen.getByRole('button', { name: `Save` });
            expect(saveButton).toBeInTheDocument();
            //expect(container).toMatchSnapshot();
        });

        it('should display username & email input fields', async ({expect}) => {
            const { container } = render(<App />);
            const editButton = screen.getAllByRole('button', { name: `Edit` });
            await userEvent.click(editButton[0]);
            // Added "aria-label="username"" to the input element to get "username" as the name
            expect(screen.getByRole('textbox', { name: `username` }));
        });


    })
});

