
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Before", adminTasks: 8, hiringTime: 25, inquiries: 100 },
  { name: "After", adminTasks: 2, hiringTime: 12, inquiries: 50 },
];

const chartConfig = {
  adminTasks: {
    label: "Admin Tasks (hours/week)",
    color: "#0369a1",
  },
  hiringTime: {
    label: "Time-to-Hire (days)",
    color: "#0891b2",
  },
  inquiries: {
    label: "HR Inquiries (relative)",
    color: "#06b6d4",
  },
};

const SynergyInnovations: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Synergy Innovations</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue via-brand-blue to-brand-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-4 py-2">Technology Sector • Global Implementation</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Driving HR Transformation Through Multi-Platform Cloud HCM Implementation
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              A comprehensive case study demonstrating strategic HR technology integration across SAP SuccessFactors, 
              Workday, and Oracle Fusion HCM for a rapidly expanding global technology firm achieving remarkable efficiency gains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">2,500</div>
                <div className="text-white/80 text-lg">Global Employees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-white/80 text-lg">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">18</div>
                <div className="text-white/80 text-lg">Month Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">75%</div>
                <div className="text-white/80 text-lg">Admin Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Executive Summary</h2>
              <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A blueprint for modern HR transformation showcasing measurable outcomes and strategic value delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="prose prose-lg text-gray-600 space-y-6">
                  <p>
                    This report details the transformative partnership between Delta Cloud Associates and Synergy Innovations, 
                    a rapidly expanding mid-sized global technology firm. Synergy Innovations faced significant operational 
                    inefficiencies and talent management challenges stemming from a fragmented landscape of disparate legacy HR systems.
                  </p>
                  <p>
                    Delta Cloud Associates collaborated with Synergy Innovations to design and implement a cohesive, cloud-based 
                    HR technology ecosystem leveraging SAP SuccessFactors, Workday, and Oracle Fusion HCM.
                  </p>
                </div>
              </div>
              <div className="bg-brand-gray rounded-lg p-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Administrative Task Reduction</span>
                    <span className="text-2xl font-bold text-brand-teal">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Time-to-Hire Improvement</span>
                    <span className="text-2xl font-bold text-brand-teal">52%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Operational Cost Savings</span>
                    <span className="text-2xl font-bold text-brand-teal">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Employee Satisfaction Increase</span>
                    <span className="text-2xl font-bold text-brand-teal">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge - 5 Card Layout */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">The Client & Their Challenge</h2>
              <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigating the complexities of disjointed HR operations across a rapidly expanding global technology company
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Complex technology systems representing fragmented HR operations"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-blue mb-6">Synergy Innovations: Rapid Growth, Complex Challenges</h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Synergy Innovations, a global technology company with 2,500 employees spanning 10 countries, 
                    had achieved rapid growth through its innovative software solutions. However, this expansion 
                    brought unforeseen complexities to its human resources operations.
                  </p>
                  <p>
                    The company's HR functions relied on a patchwork of outdated on-premise systems, manual spreadsheets, 
                    and disparate point solutions, leading to a highly fragmented operational environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-xl">Lack of Centralised Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    HR data was siloed across various systems, making it nearly impossible to gain real-time 
                    insights into the global workforce or conduct effective strategic workforce planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-xl">Inefficient Processes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Manual processes for onboarding, performance reviews, payroll, and benefits administration 
                    consumed excessive HR time and frequently led to errors and delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-xl">Poor Employee Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Employees struggled with clunky self-service portals or relied heavily on HR for basic 
                    inquiries, leading to widespread frustration and reduced engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-xl">Scalability Concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The legacy infrastructure proved incapable of scaling with global expansion whilst 
                    ensuring compliance with diverse international labour laws and GDPR regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-brand-blue text-xl">Cost Overruns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hidden expenses from manual work, frequent errors, compliance risks, and inability to 
                    strategically optimise talent significantly eroded profitability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Tabbed Approach */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Delta Cloud Associates' Tailored Solution</h2>
              <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A holistic approach to HR technology integration designed for global efficiency and employee engagement
              </p>
            </div>

            <Tabs defaultValue="strategy" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="strategy">Strategic Assessment</TabsTrigger>
                <TabsTrigger value="integration">Multi-Platform Integration</TabsTrigger>
                <TabsTrigger value="management">Data & Change Management</TabsTrigger>
              </TabsList>

              <TabsContent value="strategy" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-blue mb-6">Strategic Assessment & Roadmap Development</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-brand-blue mb-2">Comprehensive Needs Assessment</h4>
                          <p className="text-gray-600">In-depth workshops with HR, IT, and leadership teams across all global regions to identify pain points and define future objectives.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-brand-blue mb-2">Technology Infrastructure Evaluation</h4>
                          <p className="text-gray-600">Thorough analysis of existing systems, data architecture, and integration capabilities to inform solution design.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-brand-blue mb-2">Detailed Integration Roadmap</h4>
                          <p className="text-gray-600">Meticulously outlined key milestones, required resources, and realistic timelines to mitigate implementation risks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt="Strategic planning and assessment process"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="integration" className="space-y-8">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-brand-blue mb-6 text-center">Multi-Platform Integration Strategy</h3>
                  <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    Recognising Synergy Innovations' diverse functional requirements, we engineered a sophisticated, 
                    hybrid cloud HR solution leveraging the distinct strengths of leading platforms.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center bg-blue-50 p-8 rounded-lg">
                      <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">W</div>
                      <h4 className="font-bold text-brand-blue mb-4 text-xl">Workday HCM</h4>
                      <p className="text-gray-600">Core HR functionalities, global payroll processing, and streamlined onboarding workflows providing a single source of truth.</p>
                    </div>
                    
                    <div className="text-center bg-teal-50 p-8 rounded-lg">
                      <div className="bg-brand-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">S</div>
                      <h4 className="font-bold text-brand-teal mb-4 text-xl">SAP SuccessFactors</h4>
                      <p className="text-gray-600">Advanced talent management, performance management, succession planning, and comprehensive learning development.</p>
                    </div>
                    
                    <div className="text-center bg-blue-50 p-8 rounded-lg">
                      <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">O</div>
                      <h4 className="font-bold text-brand-blue mb-4 text-xl">Oracle Fusion HCM</h4>
                      <p className="text-gray-600">Powerful HR analytics and reporting capabilities for data-driven insights and strategic workforce planning.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="management" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-blue mb-6">Data Migration & Change Management</h3>
                    <div className="space-y-6">
                      <div className="bg-brand-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-brand-blue mb-3">Robust Data Migration</h4>
                        <p className="text-gray-600">Meticulous data migration plan ensuring accurate and secure transfer from disparate legacy systems with extensive validation and cleansing.</p>
                      </div>
                      <div className="bg-brand-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-brand-blue mb-3">Comprehensive Training</h4>
                        <p className="text-gray-600">Role-based training programmes with ongoing support mechanisms including dedicated helpdesk and comprehensive user guides.</p>
                      </div>
                      <div className="bg-brand-gray p-6 rounded-lg">
                        <h4 className="font-semibold text-brand-blue mb-3">Security & Compliance</h4>
                        <p className="text-gray-600">Advanced data encryption, stringent access controls, and regular compliance checks ensuring adherence to global regulatory standards.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt="Data migration and security implementation"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Results with Charts */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Measurable Results & Business Impact</h2>
              <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quantifying Synergy Innovations' transformation through key performance indicators and strategic outcomes
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-brand-teal mb-2">75%</div>
                  <CardTitle className="text-xl text-brand-blue">HR Admin Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Reduction in manual administrative tasks from 8 to 2 hours per week</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-brand-teal mb-2">52%</div>
                  <CardTitle className="text-xl text-brand-blue">Faster Hiring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Time-to-hire reduced from 25 to 12 days</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-brand-teal mb-2">30%</div>
                  <CardTitle className="text-xl text-brand-blue">Cost Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Reduction in HR technology operational costs</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-brand-teal mb-2">50%</div>
                  <CardTitle className="text-xl text-brand-blue">Fewer Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Reduction in HR-related employee inquiries through self-service</p>
                </CardContent>
              </Card>
            </div>

            {/* Chart Visualisation */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">Before vs After: Operational Efficiency Improvements</h3>
              <ChartContainer config={chartConfig} className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="adminTasks" fill="var(--color-adminTasks)" />
                    <Bar dataKey="hiringTime" fill="var(--color-hiringTime)" />
                    <Bar dataKey="inquiries" fill="var(--color-inquiries)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* Detailed KPI Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-8">Detailed Performance Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-brand-blue">
                        <th className="text-left py-4 px-4 font-bold text-brand-blue">KPI Category</th>
                        <th className="text-left py-4 px-4 font-bold text-brand-blue">Specific Metric</th>
                        <th className="text-left py-4 px-4 font-bold text-brand-blue">Before Implementation</th>
                        <th className="text-left py-4 px-4 font-bold text-brand-blue">After Implementation</th>
                        <th className="text-left py-4 px-4 font-bold text-brand-blue">Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-brand-blue">Operational Efficiency</td>
                        <td className="py-4 px-4">HR Admin Task Reduction</td>
                        <td className="py-4 px-4">8 hours/week manual effort</td>
                        <td className="py-4 px-4">2 hours/week automated</td>
                        <td className="py-4 px-4 text-brand-teal font-bold text-lg">75% Reduction</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4"></td>
                        <td className="py-4 px-4">Time-to-Hire</td>
                        <td className="py-4 px-4">25 days</td>
                        <td className="py-4 px-4">12 days</td>
                        <td className="py-4 px-4 text-brand-teal font-bold text-lg">52% Reduction</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-brand-blue">Employee Experience</td>
                        <td className="py-4 px-4">Employee Satisfaction</td>
                        <td className="py-4 px-4">Moderate satisfaction</td>
                        <td className="py-4 px-4">High satisfaction</td>
                        <td className="py-4 px-4 text-brand-teal font-bold text-lg">15% Increase</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4"></td>
                        <td className="py-4 px-4">Training Participation</td>
                        <td className="py-4 px-4">Inconsistent access</td>
                        <td className="py-4 px-4">Enhanced personalised paths</td>
                        <td className="py-4 px-4 text-brand-teal font-bold text-lg">25% Increase</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-brand-blue">Financial Impact</td>
                        <td className="py-4 px-4">Operational Costs</td>
                        <td className="py-4 px-4">High, uncontrolled</td>
                        <td className="py-4 px-4">Optimised, consolidated</td>
                        <td className="py-4 px-4 text-brand-teal font-bold text-lg">30% Savings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-blue mb-8">Conclusion & Future Outlook</h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto mb-8"></div>
            <div className="prose prose-lg text-gray-600 space-y-6 text-left">
              <p>
                Delta Cloud Associates' partnership with Synergy Innovations successfully addressed and overcame significant 
                HR operational challenges, culminating in a unified, efficient, and employee-centric HR technology landscape. 
                The strategic integration of multiple platforms demonstrated the power of a combined approach in driving both 
                immediate operational efficiencies and long-term strategic outcomes.
              </p>
              <p>
                This collaboration established a robust foundation for continuous HR innovation, enabling Synergy Innovations 
                to adapt effectively to future workforce needs and technological advancements. The ongoing leverage of advanced 
                analytics and exploration of emerging technologies now form integral parts of Synergy's strategic roadmap.
              </p>
              <p>
                For continued optimisation, it is recommended that Synergy Innovations maintain ongoing support from Delta Cloud Associates 
                for quarterly release management, adoption of new functionalities, and strategic advisory services to maximise 
                long-term ROI and value realisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Contact Delta Cloud Associates today to discuss how we can help you achieve similar results 
              and unlock your HR technology potential through strategic multi-platform integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100 transition-colors text-lg px-8 py-4">
                <Link to="/contact">Start Your Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue transition-colors text-lg px-8 py-4">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SynergyInnovations;
