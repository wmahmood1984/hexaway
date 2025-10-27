// import { supabase } from "../supabaseClient";

// // Save or update a record for given address
// export async function saveRelationship(address, parent, childrenArray) {
//   try {
//     const { data, error } = await supabase
//       .from("relationships")
//       .upsert([
//         {
//           address,
//           parent,
//           children: childrenArray, // can be ["0x123", "0x456"]
//         },
//       ])
//       .select();

//     if (error) throw error;
//     return data;
//   } catch (err) {
//     console.error("Error saving relationship:", err);
//     return null;
//   }
// }
