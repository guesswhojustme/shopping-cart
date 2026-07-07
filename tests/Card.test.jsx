import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Card } from "../src/components/Card/Card.jsx";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

describe("Card component test", () => {
    it("renders pokemon's correct data: id, name, type, weight, height, hp, img", () => {
        
        render(<Card />)

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
})