import Form from "../components/Form";

export default function LogInPage() {
  async function handleSubmit(data) {
    try {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
