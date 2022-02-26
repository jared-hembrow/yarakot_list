import { useRouter } from "next/router";
export default function Back() {
  const router = useRouter();
  return (
    <div
      style={{ marginTop: "5vh" }}
      className="ui primary button"
      onClick={() => router.back()}
    >
      <i className="arrow circle left icon" />
    </div>
  );
}
