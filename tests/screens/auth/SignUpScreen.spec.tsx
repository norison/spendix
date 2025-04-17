import { render } from "@testing-library/react-native";
import SignUpScreen from "@/src/screens/auth/SignUpScreen";

describe("SignUpScreen", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<SignUpScreen />);
    expect(queryByText("Sign Up")).not.toBeNull();
  });
});
