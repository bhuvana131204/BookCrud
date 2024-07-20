import React from 'react';

const Dashboard = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 min-h-screen flex flex-col items-center'>
      <header className='w-full py-4 bg-teal-500 text-white text-center'>
        <h1 className='text-4xl font-extrabold'>Welcome to Our Bookstore Dashboard!</h1>
      </header>
      <main className='w-full flex flex-col items-center mt-8'>
        <section className='text-center mb-8'>
          <h2 className='text-3xl font-bold leading-snug text-black'>Manage Your Bookstore with Ease</h2>
          <p className='mt-4 text-lg text-gray-700'>
            Navigate through different sections to upload and manage books, handle user accounts, manage products, and more.
          </p>
        </section>
        <section className='w-full max-w-2xl'>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h3 className='text-2xl font-bold leading-snug text-black text-center'>Dashboard Options</h3>
            <div className='mt-8'>
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Upload a Book</h4>
                <p className='text-gray-700'>
                  The Upload Book section allows you to add new books to our collection. You can provide the title, author, and upload a file. Ensure the details are accurate to help other users discover and enjoy the books you share.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Manage Books</h4>
                <p className='text-gray-700'>
                  In the Manage Books section, you can view all the books in our collection. This section allows you to edit book details, update information, and remove books that are no longer available. Keeping this section up-to-date ensures a well-maintained and accurate library.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Users</h4>
                <p className='text-gray-700'>
                  The Users section is where you can manage all user accounts. You can view user profiles, monitor activities, and manage user permissions. This helps in maintaining a safe and engaging community for all members.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Products</h4>
                <p className='text-gray-700'>
                  The Products section allows you to manage the various products available in our store. This includes adding new products, updating product details, and managing inventory. Keeping this section updated helps in providing the best shopping experience for our users.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Sign In</h4>
                <p className='text-gray-700'>
                  The Sign In section allows users to access their accounts. Make sure to use the correct credentials to gain access. This section is essential for accessing personalized features and managing your account settings.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Log Out</h4>
                <p className='text-gray-700'>
                  The Log Out section provides a secure way to sign out of your account. Always log out after your session to protect your account from unauthorized access.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Upgrade to Pro</h4>
                <p className='text-gray-700'>
                  The Upgrade to Pro section offers additional features and enhanced support. We're currently working on this feature. By upgrading, you get access to exclusive tools and resources that can help you manage your bookstore more efficiently.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Documentation</h4>
                <p className='text-gray-700'>
                  The Documentation section provides detailed guides and tutorials on how to use our platform. This is a great resource if you need help with any feature or if you want to learn more about how to make the most of our tools.
                </p>
              </div>
              
              <div className='mb-8'>
                <h4 className='text-xl font-semibold text-black'>Help</h4>
                <p className='text-gray-700'>
                  The Help section is where you can find answers to common questions and get in touch with our support team. Whether you have a technical issue or need assistance with using the platform, our help section is here to support you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
