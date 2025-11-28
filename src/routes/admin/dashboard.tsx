import { TripTrendsChart } from "../../components/charts/trip-trends-chart";
import { UserGrowthChart } from "../../components/charts/user-growth-chart";
import { GameCard } from "../../components/game-card";
import { Header } from "../../components/header";
import StatsCard from "../../components/stats-card";

export default function Dashboard() {
  const dashboardStats = {
    totalUsers: 1234,
    totalTrips: 56,
    activeUsers: 300,
    usersJoined: { currentMonth: 28, lastMonth: 20 },
    tripsCreated: { currentMonth: 14, lastMonth: 13 },
    userRole: { total: 300, currentMonth: 50, lastMonth: 40 },
  };

  const userGrowth = [
    { day: "Mon", count: 5 },
    { day: "Tue", count: 10 },
    { day: "Wed", count: 7 },
    { day: "Thu", count: 14 },
    { day: "Fri", count: 20 },
  ];

  const tripsByTravelStyle = [
    { travelStyle: "Adventure", count: 10 },
    { travelStyle: "Relax", count: 7 },
    { travelStyle: "Cultural", count: 4 },
  ];

  const allTrips = [
    {
      id: "1",
      name: "Paris Escape",
      imageUrls: ["/images/trip.jpg"],
      itinerary: [{ location: "Paris" }],
      interests: "Romantic",
      travelStyle: "Relax",
      estimatedPrice: 1200,
    },
  ];

  return (
    <main className="bg-dashboard wrapper py-8 flex flex-col gap-10">
      <Header
        title="Welcome User 👋"
        description="Track activity, trends and popular destinations"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          headerTitle="Total Users"
          total={dashboardStats.totalUsers}
          currentMonthCount={dashboardStats.usersJoined.currentMonth}
          lastMonthCount={dashboardStats.usersJoined.lastMonth}
        />

        <StatsCard
          headerTitle="Total Trips"
          total={dashboardStats.totalTrips}
          currentMonthCount={dashboardStats.tripsCreated.currentMonth}
          lastMonthCount={dashboardStats.tripsCreated.lastMonth}
        />

        <StatsCard
          headerTitle="Active Users"
          total={dashboardStats.userRole.total}
          currentMonthCount={dashboardStats.userRole.currentMonth}
          lastMonthCount={dashboardStats.userRole.lastMonth}
        />
      </div>

      {/* Trips list */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Created Trips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allTrips.map((t) => (
            <GameCard
              key={t.id}
              id={t.id}
              name={t.name}
              imageUrl={t.imageUrls[0]}
              provider={"test"}
              category={"test"}
              rtp={1}
              enabled={true}
            />
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserGrowthChart data={userGrowth} />
        <TripTrendsChart data={tripsByTravelStyle} />
      </section>
    </main>
  );
}
