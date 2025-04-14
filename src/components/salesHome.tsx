import React from "react";

const SalesHome: React.FC = () => {
    return (
        <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}>
            <header style={{ textAlign: "center", padding: "20px 0" }}>
                <h1 style={{ color: "#007BFF" }}>Welcome to Our Promotion Page!</h1>
                <p style={{ color: "#555" }}>Dont miss out on our exclusive deals and offers.</p>
            </header>
            <main style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px", width: "300px" }}>
                    <h2 style={{ color: "#007BFF" }}>Product 1</h2>
                    <p style={{ color: "#555" }}>Amazing product with great features.</p>
                    <button style={{ backgroundColor: "#007BFF", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}>
                        Learn More
                    </button>
                </div>
                <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px", width: "300px" }}>
                    <h2 style={{ color: "#007BFF" }}>Product 2</h2>
                    <p style={{ color: "#555" }}>Another fantastic product for you.</p>
                    <button style={{ backgroundColor: "#007BFF", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}>
                        Learn More
                    </button>
                </div>
            </main>
            <footer style={{ textAlign: "center", marginTop: "40px", color: "#555" }}>
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SalesHome;