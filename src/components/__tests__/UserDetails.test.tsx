import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserDetails from "../UserDetails";

describe("UserDetails Component", () => {
  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    company: {
      name: "Example Corp",
      address: {
        address: "123 Main St",
        city: "Anytown",
        state: "NY",
        stateCode: "NY",
        postalCode: "12345",
        coordinates: {
          lat: 40.7128,
          lng: -74.006,
        },
        country: "USA",
      },
      department: "Engineering",
      title: "Software Engineer",
    },
  };

  it("renders user details correctly", () => {
    render(<UserDetails user={mockUser} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();

    expect(screen.getByText("123-456-7890")).toBeInTheDocument();

    expect(screen.getByText("Example Corp")).toBeInTheDocument();

    expect(screen.getByText("123 Main St, Anytown, NY")).toBeInTheDocument();

    expect(screen.getByText("12345, USA")).toBeInTheDocument();

    expect(screen.getByText("(40.71280, -74.00600)")).toBeInTheDocument();

    expect(screen.getByText("Engineering")).toBeInTheDocument();

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });
});
