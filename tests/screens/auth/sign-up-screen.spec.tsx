import { render } from "@testing-library/react-native";
import SignUp from "@/src/screens/auth/sign-up";

describe("SignUp", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<SignUp />);
    expect(queryByText("Sign up")).not.toBeNull();
  });
});
