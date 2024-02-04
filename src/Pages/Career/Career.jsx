const Career = () => {
  return (
    <div>
      <div className="bg-gray-100 p-8 text-slate-600">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join Our Team at T-MART</h2>

          <p className="text-lg mb-4">
            At T-MART, we believe in creating a workplace that fosters
            creativity, innovation, and a passion for bringing joy to families.
            If you are enthusiastic about toys, dedicated to excellence, and
            want to be part of a dynamic team, we would love to hear from you!
          </p>

          <h3 className="text-2xl font-bold mb-4">Current Job Openings</h3>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Toy Product Manager</li>
            <li className="mb-2">Customer Support Specialist</li>
            <li className="mb-2">Marketing Coordinator</li>
            {/* Add more job openings as needed */}
          </ul>

          <p className="text-lg mb-6">
            Do not see a position that fits your skills? We are always on the
            lookout for talented individuals. Feel free to submit your resume
            and cover letter to careers@tmarttoys.com, and we will keep it on
            file for future opportunities.
          </p>

          <h3 className="text-2xl font-bold mb-4">Why Work with Us?</h3>

          <p className="text-lg mb-4">
            T-MART is not just a company; it is a community of passionate
            individuals working together to make a difference in the world of
            play. Here are a few reasons to consider a career with us:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Exciting and dynamic work environment</li>
            <li className="mb-2">Opportunities for professional growth</li>
            <li className="mb-2">
              Employee discounts on our amazing toy collection
            </li>
            <li className="mb-2">
              Flexible work hours and remote work options
            </li>
            <li className="mb-2">Collaborative and supportive team culture</li>
          </ul>

          <p className="text-lg mb-6">
            If you are ready to embark on a rewarding journey and contribute to
            creating magical moments for children, apply today! Send your resume
            and cover letter to careers@tmarttoys.com with the subject line Job
            Application - Customer Support Specialist.
          </p>

          <p className="text-lg mb-6">
            T-MART is an equal opportunity employer. We celebrate diversity and
            are committed to creating an inclusive environment for all
            employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
