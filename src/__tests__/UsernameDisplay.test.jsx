import {describe, it, test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {UserNameDisplay} from "../components/UsernameDisplay.jsx";

describe('UsernameDisplay', () => {
    it('should render username correctly', ({expect}) => {
        const result = render(<UserNameDisplay username="ansonthedev" />);
        //expect(result.container).toMatchSnapshot();
        expect(screen.getByText('ansonthedev')).toBeInTheDocument();
    })
})