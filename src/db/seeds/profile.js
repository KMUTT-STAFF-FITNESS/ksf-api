exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("profile")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("profile").insert([
        {
          profile_id: 1,
          member_id: "1",
          member_type_id: "2",
          fname: "Thinnpat",
          lname: "Mongkolthanachok",
          dob: "28/02/1999",
          email: "thinnapat.2542@mail.kmutt.ac.th",
          gender: "male",
          tel_no: "0888888888",
          weight: "100",
          height: "180",
          address: "KMUTT PRACHAUTHIT",
          department: "School of Information Technology",
        },
      ]);
    });
};
