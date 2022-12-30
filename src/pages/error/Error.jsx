import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div style={{ fontSize: '42px', textAlign: 'center', padding: '82px 0' }}>Страница не существует</div>
      <Link to="/" style={{ fontSize: '28px', textAlign: 'center', padding: '14px', display: 'flex', justifyContent: 'center', textDecoration: 'none', color: '#6481DC' }}>
        Вернуться на главную
      </Link>
    </div>
  )
}

export default Error;