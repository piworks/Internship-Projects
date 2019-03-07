using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using MySql.Data.MySqlClient;
using Parttime.Models;

namespace Parttime.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["mysql"].ConnectionString;

        //
        public IEnumerable<PartTime> GetAll()
        {
            var lstparttime = new List<PartTime>();
            using (var con = new MySqlConnection(connectionString))
            {
                var cmd = new MySqlCommand("select * from parttime", con);
                con.Open();
                using (var reader = cmd.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        PartTime parttime = new PartTime();

                        parttime.id = Convert.ToInt32(reader["id"]);
                        parttime.firstname = reader["firstname"].ToString();
                        parttime.lastname = reader["lastname"].ToString();
                        parttime.email = reader["email"].ToString();
                        parttime.workfrom = reader["workfrom"].ToString();


                        lstparttime.Add(parttime);
                    }
                }

                con.Close();

            }
            return lstparttime;
        }

        //

        public PartTime Get(string id)
        {
            PartTime parttime = new PartTime();

            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                string sqlQuery = "SELECT * FROM parttime WHERE id= " + id;
                var cmd = new MySqlCommand("SELECT * FROM parttime WHERE id=@id", con);
                cmd.Parameters.Add(new MySqlParameter("id", id));
                con.Open();
                MySqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    parttime.id = Convert.ToInt32(rdr["id"]);
                    parttime.firstname = rdr["firstname"].ToString();
                    parttime.lastname = rdr["lastname"].ToString();
                    parttime.email = rdr["email"].ToString();
                    parttime.workfrom = rdr["workfrom"].ToString();
                }
            }
            return parttime;
        }


        public void Add(PartTime parttime)
        {
             
            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                MySqlCommand command = con.CreateCommand();

                con.Open();

                command.CommandText = "INSERT INTO parttime  VALUES (@id,@firstname,@lastname,@email, @workfrom)";
                command.Parameters.AddWithValue("@id", parttime.id);
                command.Parameters.AddWithValue("@firstname", parttime.firstname);
                command.Parameters.AddWithValue("@lastname", parttime.lastname);
                command.Parameters.AddWithValue("@email", parttime.email);
                command.Parameters.AddWithValue("@workfrom", parttime.workfrom);

                command.ExecuteNonQuery();
                con.Close();
            }
        }

        public void Delete(int id)
        {

            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                var command = con.CreateCommand();
                con.Open();
                command.CommandText = "DELETE FROM parttime WHERE id=@id";
                command.Parameters.AddWithValue("@id", id);
                command.ExecuteNonQuery();

                var  ParttimeId = id;
                command.CommandText = "DELETE FROM events WHERE ParttimeId=@ParttimeId";
                command.Parameters.AddWithValue("@ParttimeId", ParttimeId);
                command.ExecuteNonQuery();
                con.Close();
                

                /*var cmd = new mysqlcommand("delete * from parttime where id=@id", con);
                con.open();
                mysqldatareader rdr = cmd.executereader();
                cmd.commandtype = commandtype.storedprocedure;

                cmd.parameters.addwithvalue("@id", id);
                cmd.parameters.add(new mysqlparameter("id", id));

                cmd.executenonquery();

                con.close();*/
            }
         
            

        }

      

        public void Update(PartTime parttime)
        {
            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                //MySqlCommand cmd = new MySqlCommand("UPDATE 'parttime' SET (firstname=@firstname , lastname=@lastname, email=@email ,workfrom=@workfrom) WHERE id=@id", con);
                //cmd.CommandType = CommandType.StoredProcedure;

                MySqlCommand cmd = con.CreateCommand();
                var id = parttime.id;
                con.Open();

                cmd.CommandText = "UPDATE parttime SET firstname=@firstname , lastname=@lastname, email=@email ,workfrom=@workfrom WHERE id=@id";

                cmd.Parameters.AddWithValue("@firstname", parttime.firstname);
                cmd.Parameters.AddWithValue("@lastname", parttime.lastname);
                cmd.Parameters.AddWithValue("@email", parttime.email);
                cmd.Parameters.AddWithValue("@id", parttime.id);
                cmd.Parameters.AddWithValue("@workfrom", parttime.workfrom);

                cmd.ExecuteNonQuery();
                con.Close();
            }
        }






    }
}