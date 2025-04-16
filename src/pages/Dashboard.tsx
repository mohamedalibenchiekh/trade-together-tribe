
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import Navbar from "@/components/Navbar";
import { 
  LineChart, 
  BarChart, 
  Line,
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, DollarSign, Euro, Bitcoin, LineChart as LineChartIcon } from "lucide-react";

// Données simulées pour les marchés
const marketData = [
  { name: 'CAC 40', value: 7324.12, change: 0.72, currency: '€' },
  { name: 'S&P 500', value: 5123.87, change: -0.14, currency: '$' },
  { name: 'Dow Jones', value: 38987.64, change: 0.33, currency: '$' },
  { name: 'Nasdaq', value: 16248.52, change: -0.17, currency: '$' },
  { name: 'DAX', value: 17648.36, change: 0.42, currency: '€' },
  { name: 'Nikkei 225', value: 38865.23, change: 1.21, currency: '¥' },
];

// Données simulées pour les cryptomonnaies
const cryptoData = [
  { name: 'Bitcoin', value: 67245.18, change: 2.14, currency: '$' },
  { name: 'Ethereum', value: 3845.62, change: 1.87, currency: '$' },
  { name: 'BNB', value: 587.34, change: -0.52, currency: '$' },
  { name: 'Solana', value: 148.89, change: 4.12, currency: '$' },
  { name: 'XRP', value: 0.64, change: -1.23, currency: '$' },
  { name: 'Cardano', value: 0.46, change: 1.08, currency: '$' },
];

// Données simulées pour les graphiques
const chartData = [
  { name: 'Jan', S_P: 4150, CAC40: 6900, BTC: 42000 },
  { name: 'Fév', S_P: 4300, CAC40: 7100, BTC: 44000 },
  { name: 'Mar', S_P: 4250, CAC40: 7000, BTC: 39000 },
  { name: 'Avr', S_P: 4400, CAC40: 7200, BTC: 45000 },
  { name: 'Mai', S_P: 4450, CAC40: 7250, BTC: 50000 },
  { name: 'Juin', S_P: 4700, CAC40: 7300, BTC: 43000 },
  { name: 'Juil', S_P: 4800, CAC40: 7250, BTC: 47000 },
  { name: 'Août', S_P: 5000, CAC40: 7400, BTC: 60000 },
  { name: 'Sept', S_P: 4900, CAC40: 7350, BTC: 58000 },
  { name: 'Oct', S_P: 5100, CAC40: 7400, BTC: 63000 },
  { name: 'Nov', S_P: 5050, CAC40: 7300, BTC: 65000 },
  { name: 'Déc', S_P: 5150, CAC40: 7350, BTC: 67000 },
];

// Configuration du graphique
const chartConfig = {
  S_P: {
    label: "S&P 500",
    color: "#0EA5E9"
  },
  CAC40: {
    label: "CAC 40",
    color: "#8B5CF6"
  },
  BTC: {
    label: "Bitcoin",
    color: "#F97316"
  }
};

const barChartData = [
  { name: 'Tech', value: 14.5 },
  { name: 'Finance', value: 11.2 },
  { name: 'Énergie', value: 9.8 },
  { name: 'Santé', value: 13.4 },
  { name: 'Conso', value: 7.9 },
  { name: 'Industrie', value: 10.3 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Marchés Financiers</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LineChartIcon className="h-4 w-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="stocks" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Actions
            </TabsTrigger>
            <TabsTrigger value="crypto" className="flex items-center gap-2">
              <Bitcoin className="h-4 w-4" />
              Cryptomonnaies
            </TabsTrigger>
            <TabsTrigger value="forex" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Forex
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Vue d'ensemble */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Graphique de tendances principales */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Tendances du marché</CardTitle>
                  <CardDescription>Performance des principaux indices sur 12 mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ChartContainer className="h-full" config={chartConfig}>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="S_P" stroke="#0EA5E9" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="CAC40" stroke="#8B5CF6" />
                        <Line type="monotone" dataKey="BTC" stroke="#F97316" />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Graphique sectoriel */}
              <Card>
                <CardHeader>
                  <CardTitle>Répartition Sectorielle</CardTitle>
                  <CardDescription>Performance par secteur d'activité</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8B5CF6" name="Performance %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tableau des tendances récentes */}
              <Card>
                <CardHeader>
                  <CardTitle>Indices majeurs</CardTitle>
                  <CardDescription>Dernière mise à jour: 16 avril 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Indice</TableHead>
                        <TableHead className="text-right">Valeur</TableHead>
                        <TableHead className="text-right">Var.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {marketData.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{item.currency}{item.value.toLocaleString()}</TableCell>
                          <TableCell className={`text-right ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            <div className="flex items-center justify-end">
                              {item.change >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                              {Math.abs(item.change)}%
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="stocks">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
                <CardDescription>Principaux indices boursiers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indice</TableHead>
                      <TableHead className="text-right">Valeur</TableHead>
                      <TableHead className="text-right">Var.</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketData.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">{item.currency}{item.value.toLocaleString()}</TableCell>
                        <TableCell className={`text-right ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          <div className="flex items-center justify-end">
                            {item.change >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                            {Math.abs(item.change)}%
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crypto">
            <Card>
              <CardHeader>
                <CardTitle>Cryptomonnaies</CardTitle>
                <CardDescription>Tendances des principales cryptomonnaies</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Crypto</TableHead>
                      <TableHead className="text-right">Prix</TableHead>
                      <TableHead className="text-right">Var. 24h</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cryptoData.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">{item.currency}{item.value.toLocaleString()}</TableCell>
                        <TableCell className={`text-right ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          <div className="flex items-center justify-end">
                            {item.change >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                            {Math.abs(item.change)}%
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forex">
            <div className="grid place-items-center p-8 text-center">
              <div>
                <Euro className="h-12 w-12 mb-2 mx-auto text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Données Forex</h3>
                <p className="text-muted-foreground mb-4">
                  Les données du marché des devises seront disponibles prochainement.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
