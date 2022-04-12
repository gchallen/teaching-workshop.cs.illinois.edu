/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react"
import LazyLoad from "react-lazyload"

const members = [
  {
    name: "Abdu Alawini",
    position: "Teaching Assistant Professor",
    photo: 85157,
    link: "https://alawini.web.illinois.edu/",
  },
  {
    name: "Yael Gertner",
    position: "Teaching Assistant Professor",
    photo: 100582,
  },
  {
    name: "Brad Solomon",
    position: "Teaching Assistant Professor",
    photo: 106751,
  },
]

const OrganizingCommittee2022: React.FC = () => {
  const contents = useMemo(
    () =>
      members.map(({ name, position, photo, link }, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row", padding: "8px 0" }}>
          <LazyLoad height={100}>
            <img
              src={`https://ws.engr.illinois.edu/directory/viewphoto.aspx?id=${photo}&s=100&type=portrait`}
              width={100}
              height={100}
              style={{ objectFit: "contain", objectPosition: "center top" }}
              alt={`Photo of ${name}`}
            />
          </LazyLoad>
          <div>
            <div className="h4">
              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                <>{name}</>
              )}
            </div>
            {position}, University of Illinois
          </div>
        </div>
      )),
    []
  )
  return <div style={{ display: "flex", flexDirection: "column", marginTop: 8, textAlign: "left" }}>{contents}</div>
}
export default OrganizingCommittee2022
