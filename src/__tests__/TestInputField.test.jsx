import {describe, it, test, expect} from 'vitest';
import {within} from "@testing-library/dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestInputField from "../components/TestInputField";

it("should find input by placeholder", async () => {
    render(<TestInputField />);
    expect(screen.getByPlaceholderText("enter data...")).toBeInTheDocument();
});

it("should find input by display value", async () => {
    render(<TestInputField />);
    expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
});