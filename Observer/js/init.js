var rockets = {
    "B-123": new AltitudeNotifier(300, 12, ".rocket1"),
    "BCS-2355": new AltitudeNotifier(150, 10, ".rocket2")
};





rockets["B-123"].add(new Cosmonaut("Stas", "Kh"));
rockets["B-123"].add(new Cosmonaut("Alink", "In"));
rockets["B-123"].add(new Cosmonaut("Ole", "Pro"));
rockets["B-123"].add(new Cosmonaut("Helen", "Kov"));
rockets["B-123"].start();




rockets["BCS-2355"].add(new Cosmonaut("Bombay", "Sapphire"));
rockets["BCS-2355"].add(new Cosmonaut("Bob", "Marley"));
rockets["BCS-2355"].add(new Cosmonaut("Jack", "Daniels"));
rockets["BCS-2355"].add(new Cosmonaut("Calvin", "Klein"));
rockets["BCS-2355"].add(new Cosmonaut("Kevin", "Hart"));
rockets["BCS-2355"].add(new Cosmonaut("Tila", "Tequila"));
rockets["BCS-2355"].start();