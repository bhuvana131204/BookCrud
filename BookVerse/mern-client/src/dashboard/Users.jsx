import React from 'react';

const Users = () => {
  return (
    <div className="px-4 lg:px-24 py-8 bg-teal-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-teal-800">Users</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-teal-700">User Types and Preferred Genres</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-600">Young Adults</h3>
          <p className="text-gray-700 mt-2">
            Young adults often prefer genres such as fantasy, dystopian, and contemporary fiction. Popular series like "Harry Potter" and "The Hunger Games" are big hits among this demographic, as well as novels that explore coming-of-age themes.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-600">Adults</h3>
          <p className="text-gray-700 mt-2">
            Adults tend to have diverse reading preferences that span across genres like mystery, thriller, romance, science fiction, and literary fiction. Titles like "Gone Girl" and "The Great Gatsby" often appeal to this group, providing both entertainment and thought-provoking content.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-600">Children</h3>
          <p className="text-gray-700 mt-2">
            Children's literature includes genres like adventure, fantasy, and educational books. Series such as "Percy Jackson" and classic tales like "Charlotte's Web" are popular choices that captivate young readers with engaging stories and relatable characters.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-teal-600">Seniors</h3>
          <p className="text-gray-700 mt-2">
            Senior readers often enjoy genres like historical fiction, biographies, and cozy mysteries. Books that offer nostalgic reflections or light-hearted mysteries, such as "The Guernsey Literary and Potato Peel Pie Society," are favorites among this group.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-teal-700">More Insights</h2>
        <p className="text-gray-700 mt-2">
          Understanding the preferences of different user demographics helps in curating a diverse and engaging collection of books. Catering to a wide range of interests ensures that every user finds something they love, whether they are seeking adventure, romance, education, or nostalgia.
        </p>
        <p className="text-gray-700 mt-4">
          For young adults, it’s essential to provide relatable stories that reflect their own experiences and challenges. Adults often appreciate complex characters and intricate plots that offer a temporary escape from reality. Children’s books should be colorful, imaginative, and filled with lessons that foster growth and learning. Seniors may look for books that reflect on historical events or provide a comforting read through cozy mysteries.
        </p>
        <p className="text-gray-700 mt-4">
          By understanding these preferences, our bookstore aims to create a collection that is inclusive and exciting for all readers. We continually update our catalog to include the latest bestsellers, timeless classics, and hidden gems across all genres.
        </p>
      </section>
    </div>
  );
};

export default Users;
