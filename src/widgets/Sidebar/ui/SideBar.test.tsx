import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("SideBar", () => {
    test('test', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    })
    test('test toogle', () => {
        renderWithTranslation(<Sidebar />)
        const toggleBtn = screen.getByTestId("sidebar-toogle")
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })
})