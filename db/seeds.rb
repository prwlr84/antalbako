# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

work = Work.create(
  [
    {img:"https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120044_www.redu.co_ytaiqj.png",
    name: "REDU.CO",
    url: "redu.co",
    desc:[ "Would you reduce your carbon footprint, but not sure how?", "Have a look at REDU.CO.", "A fan way, to be better to the enviroment. With challenges, connect to your friends and compare your CO2 emission, and more.", "Our LeWagon final project, built with Rails, JS, Webpack.", "To log in, you can use juanpablo@mail.com/ 123456789 combination."]},
    {img:"https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120650_mundo-coche.com_mdp64d.png",
    name: "MUNDO COCHE",
    url: "mundo-coche.com",
    desc: ["Simple landing page for a used-parts dealer. With email request form.", "Built with Rails"]},
    {img:"https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120145_rent-a-skill.herokuapp.com_heitum.png",
    name: "RENT-A-SKILL",
    url: "rent-a-skill.herokuapp.com",
    desc: ["Skillful developers to hire here!", "Find a developer with the desired skillset around you or the other side of the world.", "LeWagon side project. Built with Rails, JS, Webpack.", "To log in, you can use: guest@guest.com/ 123456 combination."]},
    {img:"https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120520_chat-ab-rrr.herokuapp.com_bgk8qi.png",
    name: "CHAT APP",
    url: "chat-ab-rrr.herokuapp.com",
    desc: ["A simple chat app, LeWagon exercise. With React, Redux, and Rails backend", "To log in, you can use guest@guest.com/ 123456 combination."]},
    {img:"https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_121453_localhost_wc9kng.png",
    name: "GARAGE APP",
    url: "rwe-garage.herokuapp.com",
    desc: ["Garage management application.", "React, Redux with ExpressJS backend"]}
  ])

#ranks = 10.times{Rank.create(score: rand(1000), name: Faker::Name.unique.name, country: Faker::Address.country)}
