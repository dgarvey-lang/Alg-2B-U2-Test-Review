/*
  Shared settings for student device buzzers (used by index.html and buzzer.html).
  Devices connect to the teacher's screen through PeerJS's free public server,
  so no account or server setup is needed.
*/
window.NETCFG = {
  PREFIX: "pa-alg2b-u2-",                       // keeps our room codes separate from other PeerJS users
  COLORS: ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#a855f7", "#ec4899"],
  peerOptions: function () {
    // For local testing only: ?peerhost=localhost:9000 uses a self-hosted PeerJS server.
    var h = new URLSearchParams(location.search).get("peerhost");
    if (!h) return { debug: 0 };
    var parts = h.split(":");
    return { host: parts[0], port: +(parts[1] || 9000), path: "/", secure: false, debug: 0, config: { iceServers: [] } };
  },
  newCode: function () {
    var A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", s = "";   // no 0/O or 1/I mix-ups
    for (var i = 0; i < 4; i++) s += A[Math.floor(Math.random() * A.length)];
    return s;
  }
};
