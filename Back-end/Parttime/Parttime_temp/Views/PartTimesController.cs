using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Parttime.Models;

namespace Parttime.Views
{
    public class PartTimesController : Controller
    {
        private ParttimeContext db = new ParttimeContext();

        // GET: PartTimes
        public ActionResult Index()
        {
            return View(db.Parttime.ToList());
        }

        // GET: PartTimes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartTime partTime = db.Parttime.Find(id);
            if (partTime == null)
            {
                return HttpNotFound();
            }
            return View(partTime);
        }

        // GET: PartTimes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PartTimes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,firstname,lastname,email,workfrom")] PartTime partTime)
        {
            if (ModelState.IsValid)
            {
                db.Parttime.Add(partTime);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(partTime);
        }

        // GET: PartTimes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartTime partTime = db.Parttime.Find(id);
            if (partTime == null)
            {
                return HttpNotFound();
            }
            return View(partTime);
        }

        // POST: PartTimes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,firstname,lastname,email,workfrom")] PartTime partTime)
        {
            if (ModelState.IsValid)
            {
                db.Entry(partTime).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(partTime);
        }

        // GET: PartTimes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartTime partTime = db.Parttime.Find(id);
            if (partTime == null)
            {
                return HttpNotFound();
            }
            return View(partTime);
        }

        // POST: PartTimes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            PartTime partTime = db.Parttime.Find(id);
            db.Parttime.Remove(partTime);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
