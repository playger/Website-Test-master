import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "shared/ui/Button/Button"
    

describe("button",()=>{
    test ( 'test render' , ()=>{
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument()
    })
    test('test clear theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass('clear')
        screen.debug()
    })
})