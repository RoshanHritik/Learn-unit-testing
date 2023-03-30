import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const {getByTestId} = render(<Counter initialCount={0} />);
        const countValue = Number(screen.getByTestId("count").textContent);

        expect(countValue).toEqual(0);
    });
});

describe(Counter, () => {
    it("counter should increment by 1 if the increment button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />);
        const incrementBttn = screen.getByRole("button", {name: "Increment"});
        fireEvent.click(incrementBttn);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    });
})

    it("counter should decrement by 1 if the decrement button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />);
        const decrementBttn = screen.getByRole("button", {name: "Decrement"});
        fireEvent.click(decrementBttn);
        const countValue = Number(screen.getByTestId("count").textContent);
        expect(countValue).toEqual(-1);
    });

        it("counter should restart from 0 if the restart button is clicked", () => {
            const {getByTestId, getByRole} = render(<Counter initialCount={50} />);
            const restartBttn = screen.getByRole("button", {name: "Restart"});
            fireEvent.click(restartBttn);
            const countValue = Number(screen.getByTestId("count").textContent);
            expect(countValue).toEqual(0);
        });

            it("count should invert signs if the switch signs button is clicked", () => {
                const {getByTestId, getByRole} = render(<Counter initialCount={10} />);
                const switchBttn = screen.getByRole("button", {name: "Switch Signs"});
                fireEvent.click(switchBttn);
                const countValue = Number(screen.getByTestId("count").textContent);
                expect(countValue).toEqual(-10);
            });
