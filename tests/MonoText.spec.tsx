import { render } from "@testing-library/react-native";
import { MonoText } from "@/components/StyledText";

describe("MonoText", () => {
  it("renders correctly", () => {
    const text = "Hello World";
    const { getByText } = render(<MonoText>{text}</MonoText>);
    expect(getByText(text)).toBe(null);
  });
});
