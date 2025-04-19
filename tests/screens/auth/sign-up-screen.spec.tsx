import { render } from "@testing-library/react-native";
import SignUp from "@/src/screens/auth/sign-up";

describe("SignUpScreen", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<SignUp />);
    expect(queryByText("Sign Up")).not.toBeNull();
  });
});
