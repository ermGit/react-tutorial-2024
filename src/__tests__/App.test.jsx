import {describe, it, test, expect} from 'vitest';
import {within} from "@testing-library/dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const usersData = [
    {
        id: 1,
        username: 'John1',
        email: 'john1@example.com',
    },
    {
        id: 2,
        username: 'John2',
        email: 'john2@example.com',
    },
    {
        id: 3,
        username: 'John3',
        email: 'john3@example.com',
    },
    {
        id: 4,
        username: 'John4',
        email: 'john4@example.com',
    }
];

describe('App', () => {
    it('should render App correctly', async ({expect}) => {
        const { container } = render(<App usersData={[]} />);
        expect(container).toMatchSnapshot();
    });

    describe("When there is only one User", () => {
        describe('Edit Button is Clicked', async () => {
            it('should render Save button', async ({expect}) => {
                const { container } = render(<App usersData={[usersData[0]]} />);
                const editButton = screen.getAllByRole('button', { name: `Edit` });
                await userEvent.click(editButton[0]);
                const saveButton = screen.getByRole('button', { name: `Save` });
                expect(saveButton).toBeInTheDocument();
                //expect(container).toMatchSnapshot();
            });

            it('should display username & email input fields', async ({expect}) => {
                const { container } = render(<App usersData={usersData} />);
                const editButton = screen.getAllByRole('button', { name: `Edit` });

                // Could also be used, but it has lower priority than getbylabel or getbyrole
                /*
                expect(
                    screen.getByTestId("edit-user-button-1")
                ).toBeInTheDocument();
                */

                await userEvent.click(editButton[0]);
                // Added "aria-label="username"" to the input element to get "username" as the name
                expect(
                    screen.getByRole('textbox', { name: `username` })
                ).toBeInTheDocument();

                expect(
                    screen.getByRole('textbox', { name: `email` })
                ).toBeInTheDocument();

                expect(
                    screen.getByLabelText("Username:")
                ).toBeInTheDocument();

                expect(
                    screen.getByLabelText("Email:")
                ).toBeInTheDocument();
            });
        });
    });

    describe("When there are two Users", () => {
        it('should have two users displayed', () => {
            const {container} = render(<App usersData={[usersData[0], usersData[1]]} />);
            const userNames = screen.getAllByText(usersData[0].username);
            expect(userNames).toHaveLength(2);

            expect(screen.getAllByText(usersData[1].username)).toHaveLength(2);
        });

        describe('Edit Button of the first user is Clicked', async () => {
            it('should render Save button', async ({expect}) => {
                const {container} = render(<App usersData={[usersData[0], usersData[1]]} />);

                const userDetails = screen.getAllByTestId("user-details-1");
                expect(userDetails[0]).toBeInTheDocument();

                const editButton = within(userDetails[0]).getByRole('button', { name: `Edit` });
                await userEvent.click(editButton);

                //const editButton = screen.getAllByRole('button', {name: `Edit`});
                //await userEvent.click(editButton[0]);
                const saveButton = within(userDetails[0]).getByRole('button', { name: `Save` });
                expect(saveButton).toBeInTheDocument();
                //expect(container).toMatchSnapshot();
            });

            it('should display username & email input fields', async ({expect}) => {
                const {container} = render(<App usersData={[usersData[0], usersData[1]]}/>);
                const editButton = screen.getAllByRole('button', {name: `Edit`});

                // Could also be used, but it has lower priority than getbylabel or getbyrole
                /*
                expect(
                    screen.getByTestId("edit-user-button-1")
                ).toBeInTheDocument();
                */

                await userEvent.click(editButton[0]);
                // Added "aria-label="username"" to the input element to get "username" as the name
                expect(
                    screen.getByRole('textbox', {name: `username`})
                ).toBeInTheDocument();

                expect(
                    screen.getByRole('textbox', {name: `email`})
                ).toBeInTheDocument();

                expect(
                    screen.getByLabelText("Username:")
                ).toBeInTheDocument();

                expect(
                    screen.getByLabelText("Email:")
                ).toBeInTheDocument();
            });
        });
    });
});

