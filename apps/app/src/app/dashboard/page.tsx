import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { getDirectoryPath } from '@/utils/getDirectoryPath';
import { parseJsonFile } from '@/utils/parseJsonFile';
import { IdWrapper } from '@/types/global.types';
import { User } from '@/types/users.types';
import { ContentLayout } from '@/components/dashboard/admin-panel/content-layout';

const USERS_DIRECTORY = getDirectoryPath('users.json');

const Dashboard = ({ user }: { user: User | null }) => {
//   if (!user) {
//     return <div>Unauthorized. Please log in.</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user.fullName}!</h1>
//       <p>Email: {user.email}</p>
//       {/* Add UserWorkspaces component to fetch workspaces */}
//       {/* <UserWorkspaces userId={user.id} /> */}
//     </div>
//   );
// };

// // Server-side function to fetch user data
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { req } = context;
//   const cookieHeader = req.headers.cookie || '';
  
//   // Parse cookies
//   const cookies = parse(cookieHeader);
//   const userId = cookies.user_id;

//   if (!userId) {
//     // If user_id is not present in cookies, redirect to login
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   // Fetch user data
//   const users = await parseJsonFile<IdWrapper<User>[]>(USERS_DIRECTORY);
//   const user = users.find(u => u.id === userId) || null;

//   return {
//     props: {
//       user, // Pass user data as a prop to the component
//     },
//   };
return ( 
      <ContentLayout title="Test">
        <div >Test</div>
      </ContentLayout>
)
};

export default Dashboard;
