import { useParams, useNavigate } from "react-router";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Voltar
      </button>

      <h1>Detalhes</h1>

      <span>
        ID do produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
