import { render, screen} from '@testing-library/react';
import DayRow from './DayRow';
import { it } from 'node:test';

// import matchers from '@testing-library/jest-dom/types/matchers';
// expect.extend(matchers)

it("should have hello world", () => {
    render(<DayRow/>);
    const message = screen.queryByText(/Hello World/i);
    expect(message).toBeVisible();
});