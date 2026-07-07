import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Card } from "../src/components/Card/Card.jsx";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";




describe("Card component test", () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    it("renders pokemon's correct data: id, name, type, weight, height, hp, price, img", () => {
        
        render( <Card pokemon={'bulbasaur'}/>)

        const img = screen.getByRole("img", {name: "ditto"})
        expect(screen.getByText(`#132`));
        expect(screen.getByText('Ditto'));
        expect(screen.getByText('Normal'));
        expect(screen.getByText(`${40 / 10} kg`));
        expect(screen.getByText(`${3 * 10} cm`));
        expect(screen.getByText('48'));
        expect(screen.getByText('$0'));
        expect(img).toHaveAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");
    })

    it("remove button rendered", () => {
        render(<Card />);
        expect(screen.getByRole("button", {name: /remove/i})).toBeInTheDocument();
    })

    it("add to cart button rendered", () => {
        render(<Card page={'shop'}/>);
        expect(screen.getByRole("button", {name: /add to cart/i})).toBeInTheDocument();
    })

    it("decrease - button rendered", () => {
        render(<Card />);
        expect(screen.getByRole("button", {name: '-'})).toBeInTheDocument();
    })

    it("inrease + button rendered", () => {
        render(<Card />);
        expect(screen.getByRole("button", {name: '+'})).toBeInTheDocument();
    })

    it("remove button handler fires", async () => {
        render(<Card removeToCart={onClick}/>);

        const btn = screen.getByRole("button", {name: /remove/i});

        await user.click(btn);

        expect(onClick).toHaveBeenCalled();
    })

    it("add to cart button handler fires", async () => {
        render(<Card page={'shop'} addToCart={onClick}/>);

        const btn = screen.getByRole("button", {name: /add to cart/i});

        await user.click(btn);

        expect(onClick).toHaveBeenCalled();
    })
    
    it("decrease - button handler fires", async () => {
        render(<Card handleDecreaseState={onClick}/>);

        const btn = screen.getByRole("button", {name: '-'});

        await user.click(btn);

        expect(onClick).toHaveBeenCalled();
    })

    it("increase + button handler fires", async () => {
        render(<Card handleIncreaseState={onClick}/>);

        const btn = screen.getByRole("button", {name: '+'});

        await user.click(btn);

        expect(onClick).toHaveBeenCalled();
    })
})
