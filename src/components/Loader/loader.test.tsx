
import { render,screen} from "@testing-library/react";
import { describe,expect,test} from "vitest";
import Loader from "./loader";

describe("<Loader/>", () => {
    test("renders loading component", () => {
        render(<Loader />);
        const LoaderElement = screen.getByTestId("loader");
        expect(LoaderElement).not.toBeNull();
        });
    })