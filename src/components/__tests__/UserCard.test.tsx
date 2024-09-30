import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, expect, vi } from "vitest";
import UserCard from "../UserCard";

describe("UserCard Component", () => {
  const mockUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    company: {
      name: "Example Corp",
    },
  };

  const mockOnClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with given user data", () => {
    render(<UserCard user={mockUser} onClick={mockOnClick} />);

    expect(screen.getByText("JD")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("Example Corp")).toBeInTheDocument();

    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
  });

  it("calls onClick function when the card is clicked", () => {
    render(<UserCard user={mockUser} onClick={mockOnClick} />);

    const userCard = screen.getByText("John Doe").closest("div");
    fireEvent.click(userCard!); // Ensure userCard is not null

    expect(mockOnClick).toHaveBeenCalled();
  });
});
