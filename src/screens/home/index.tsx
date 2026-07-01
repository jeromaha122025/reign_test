import { Tabs } from "../../components/tabs"

const Home = (): React.ReactElement => {
  return (
    <div className="container">

      <h2>Integrantes</h2>
      <ul>
        <li>Matias Romero</li>
        <li>Landeo Gianmarco</li>
      </ul>

      <div className="row">
        <Tabs />
      </div>
    </div>
  )
}

export { Home }