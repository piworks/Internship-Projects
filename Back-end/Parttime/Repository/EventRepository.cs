using System;
using System.Collections.Generic;
using System.Configuration;
using Parttime.Models;
using MySql.Data.MySqlClient;

using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Parttime.Repository
{
    public class EventRepository : IEventRepository
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["mysql"].ConnectionString;
        public IEnumerable<Event> GetAll()
        {
            var lstevent = new List<Event>();
            using (var con = new MySqlConnection(connectionString))
            {
                var cmd = new MySqlCommand("select * from events", con);
                con.Open();
                using (var reader = cmd.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        Event events = new Event();

                        events.EventID = Convert.ToInt32(reader["EventID"]);
                        events.Title = reader["Title"].ToString();
                        events.Description = reader["Description"].ToString();
                        events.StartAt = Convert.ToDateTime(reader["StartAt"]);
                        events.EndAt = Convert.ToDateTime(reader["EndAt"]);
                        events.IsFullDay = Convert.ToBoolean(reader["IsFullDay"]);
                        events.ParttimeId = Convert.ToInt32(reader["ParttimeId"]);
                        events.Work = reader["Work"].ToString();



                        lstevent.Add(events);
                    }
                }

                con.Close();

            }
            return lstevent;
        }
        public IEnumerable<PartTime> GetPart()
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


        public void Add(Event events)
        {

            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                MySqlCommand command = con.CreateCommand();

                con.Open();


                command.CommandText = "INSERT INTO events  VALUES (@EventID,@Title,@Description,@StartAt, @EndAt,@IsFullDay,@ParttimeId,@Work)";
                command.Parameters.AddWithValue("@EventID", events.EventID);
                command.Parameters.AddWithValue("@Title", events.Title);
                command.Parameters.AddWithValue("@Description", events.Description);
                command.Parameters.AddWithValue("@StartAt", events.StartAt);
                command.Parameters.AddWithValue("@EndAt", events.EndAt);
                command.Parameters.AddWithValue("@IsFullDay", events.IsFullDay);
                command.Parameters.AddWithValue("@ParttimeId", events.ParttimeId);
                command.Parameters.AddWithValue("@Work", events.Work);

                command.ExecuteNonQuery();
                con.Close();
            }


        }
        public void Delete(int EventID)
        {

            using (MySqlConnection con = new MySqlConnection(connectionString))
            {
                var command = con.CreateCommand();
                con.Open();
                command.CommandText = "DELETE FROM events WHERE EventID=@EventID";
                command.Parameters.AddWithValue("@EventID", EventID);
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
    }
}