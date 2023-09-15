
import { Profile } from "components/Profile/Profile"
import user from "../data/user.json"
import data from "../data/data.json"


export const App = props => {
  return (
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  );
};


export const StatTitle = props => {
  return (
   <Statistics title="Upload stats" stats={data} />
  );
};

export const StatData = props => {
  return (
<Statistics stats={data} />
  );
};




















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

